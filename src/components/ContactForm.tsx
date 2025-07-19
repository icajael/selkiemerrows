import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MessageSquare, User, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    facebookLink: "",
    instagramLink: "",
    message: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.contactNumber || !formData.email || !selectedDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a booking date.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert date to PST timezone
      const pstDate = new Date(selectedDate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
      
      await addDoc(collection(db, "bookings"), {
        ...formData,
        bookingDate: pstDate,
        submittedAt: new Date(),
        timezone: "PST"
      });

      toast({
        title: "Booking Submitted!",
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        facebookLink: "",
        instagramLink: "",
        message: ""
      });
      setSelectedDate(undefined);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-2">
            <MessageSquare className="h-8 w-8" />
            Contact Us
          </CardTitle>
          <CardDescription className="text-white/80 text-lg">
            Book your diving adventure with Selkies & Merrows
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
              <Label htmlFor="contactNumber" className="text-white font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Number *
              </Label>
              <Input
                id="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Facebook Link */}
            <div className="space-y-2">
              <Label htmlFor="facebook" className="text-white font-medium flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                Facebook Account Link
              </Label>
              <Input
                id="facebook"
                value={formData.facebookLink}
                onChange={(e) => handleInputChange("facebookLink", e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                placeholder="https://facebook.com/yourprofile"
              />
            </div>

            {/* Instagram Link */}
            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-white font-medium flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                Instagram Account Link
              </Label>
              <Input
                id="instagram"
                value={formData.instagramLink}
                onChange={(e) => handleInputChange("instagramLink", e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                placeholder="https://instagram.com/yourprofile"
              />
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <Label className="text-white font-medium flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Booking Date (PST Timezone) *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                      !selectedDate && "text-white/60"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select booking date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Message/Inquiry */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white font-medium">
                Message or Inquiry
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 min-h-[100px]"
                placeholder="Tell us about your diving experience, preferences, or any questions you have..."
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}