import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { SignedOut } from "@clerk/clerk-react";

const Contact = () => {
  const { toast } = useToast();

  return (
    <section className="md:max-w-screen-xl min-h-screen my-auto mx-auto px-4 md:px-6 py-32 xl:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-center">
          <div className="grid gap-4 col-span-1">
            <div className="space-y-2">
              <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                Contact Us
              </h2>
              <p className="text-gray-200">
                Got questions or want to schedule a tour? Drop us a message!
              </p>
            </div>
            <form className="grid gap-4 md:grid-cols-1">
              <SignedOut>
                <div className="grid gap-2">
                  <Label className="text-sm text-gray-200" htmlFor="name">
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label className="text-sm text-gray-200" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </SignedOut>
              <div className="grid gap-2">
                <Label className="text-sm text-gray-200" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="min-h-[100px] resize-y"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="grid gap-2">
                <Button
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Message Sent!",
                      description:
                        "We've received your message. We'll respond promptly.",
                      action: <ToastAction altText="ok">OK</ToastAction>,
                    });
                  }}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
          <div className="col-span-2 lg:justify-center my-auto z-0">
            <div className="w-full h-96 overflow-hidden">
              <MapContainer
                style={{ height: "100%", width: "100%" }}
                center={[8.9889, 38.7852]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                />

                <Marker position={[8.9889, 38.7852]}>
                  <Popup>Bole, Addis Ababa</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
