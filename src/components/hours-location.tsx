import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface DayHours {
  day: string;
  hours: string;
}

export const HoursLocation: React.FC = () => {
  const hoursData: DayHours[] = [
    { day: "Monday", hours: "11 AM–10 PM" },
    { day: "Tuesday", hours: "11 AM–10 PM" },
    { day: "Wednesday", hours: "11 AM–10 PM" },
    { day: "Thursday", hours: "11 AM–10 PM" },
    { day: "Friday", hours: "11 AM–10 PM" },
    { day: "Saturday", hours: "11 AM–10 PM" },
    { day: "Sunday", hours: "11 AM–9:30 PM" },
  ];

  return (
    <section id="location" className="py-20 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Hours & <span className="text-primary">Location</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-foreground-500">
            Visit us in Downtown Charleston for an unforgettable dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md h-full">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon icon="lucide:clock" className="mr-2 text-primary" />
                  Hours of Operation
                </h3>
                <div className="space-y-3">
                  {hoursData.map((item, index) => (
                    <React.Fragment key={item.day}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-foreground-600">{item.hours}</span>
                      </div>
                      {index < hoursData.length - 1 && (
                        <Divider className="my-2" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md h-full">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon icon="lucide:map-pin" className="mr-2 text-secondary" />
                  Our Location
                </h3>
                <p className="mb-4">
                  <span className="font-medium block mb-1">Address:</span>
                  293 King St Apartment 1, Charleston, SC 29401
                </p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center">
                    <Icon icon="lucide:phone" className="mr-2 text-primary" />
                    <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="lucide:mail" className="mr-2 text-primary" />
                    <a href="mailto:info@firegrillasiafusion.com" className="hover:text-primary transition-colors">
                      info@firegrillasiafusion.com
                    </a>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.6217718675384!2d-79.93171382427933!3d32.78217167264636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a43c8b9b6e3%3A0x6c4b4e7c8f1b2a3d!2s293%20King%20St%2C%20Charleston%2C%20SC%2029401%2C%20USA!5e0!3m2!1sen!2sus!4v1693502421159!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fire Grill Asian Fusion Restaurant location"
                  />
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};