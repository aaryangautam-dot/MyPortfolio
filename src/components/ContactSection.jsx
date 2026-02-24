import { Mail, Phone } from "lucide-react";

export const ContactSection = () => {
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
                                     9897675443
                                </a>
                            </div>
                        </div>

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
                    </div>

                </div>

            </div>
            </div>
        </section>
    );
};