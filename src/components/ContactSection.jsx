import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { Description } from "@radix-ui/react-toast";
import { useState } from "react";
export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, seIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()

        seIsSubmitting(true);

        setTimeout(() => {
            toast({
                title:"Message sent!",
                description: "Thank you for your message. I'll get back to u soon",
            });
            seIsSubmitting(false);
        }, 1500);

        
    };
    return ( 
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tetx-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Computer Science Student looking for an opportunity to start his professional journey. Feel free to reach out.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Info </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:aaryangautam291@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    aaryangautam291@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:9897675443" 
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (233) 9897675443
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a  
                                className="text-muted-foreground hover:text-primary transition-colors">
                                    Noida, UP, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 ">
                        <h4 className="font-medium mb:4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center"> 
                            <a href="https://www.linkedin.com/in/aaryan-gautam-62869232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin />
                            </a>

                             <a href=""  className="text-muted-foreground hover:text-primary transition-colors"target="_blank">
                                <Twitter/>
                            </a>

                             <a href="https://www.instagram.com/shiva_tyagi._._?igsh=Z21kMzk5cHlsM21o" target="_blank"  className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram/>
                            </a>



                        </div>
                    </div>

                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs"  >
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="bloack tex-sm font-medium mb-2 "> Your Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-imput bg-background focus:outline:hidden focus:ring-2 focus-ring-primary"
                            placeholder="Jon..."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="bloack tex-sm font-medium mb-2 "> Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-imput bg-background focus:outline:hidden focus:ring-2 focus-ring-primary"
                            placeholder="jon@gmail.com"
                            />
                        </div>


                        <div>
                            <label htmlFor="meassage" className="bloack tex-sm font-medium mb-2 "> Your Message</label>
                            <input
                            
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-imput bg-background focus:outline:hidden focus:ring-2 focus-ring-primary resize-none"
                            placeholder="Hello I'm ...."
                            />
                        </div>

                        <button type="submit" 
                        disabled={isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2", )}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>

                    </form>

                </div>

            </div>
            </div>
        </section>
    );
};