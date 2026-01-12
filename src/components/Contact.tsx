import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center space-y-8 border-t border-border/40">
      <h2 className="text-4xl md:text-5xl font-bold font-display">
        Let's build something <br />
        <span className="text-chelsea">extraordinary.</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-lg">
        I'm currently looking for frontend roles and freelance opportunities. 
        Whether you have a question or just want to talk about Chelsea FC, my inbox is open.
      </p>
      
      <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full h-14 px-8 text-lg font-bold">
          <Mail className="mr-2 h-5 w-5" /> Say Hello
        </Button>
        <Button variant="outline" size="lg" className="border-white/20 bg-transparent text-white rounded-full h-14 px-8 text-lg">
          Connect on LinkedIn <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Contact;