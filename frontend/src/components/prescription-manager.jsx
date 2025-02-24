"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrescriptionManager() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [newPrescription, setNewPrescription] = useState("");

  const addPrescription = () => {
    if (newPrescription) {
      setPrescriptions([...prescriptions, newPrescription]);
      setNewPrescription("");
    }
  };

  return (
    <section id="prescription" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Prescription Manager
        </h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Add New Prescription</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter prescription details"
              value={newPrescription}
              onChange={(e) => setNewPrescription(e.target.value)}
              className="mb-4"
            />
            <Button onClick={addPrescription} className="w-full">
              Add Prescription
            </Button>
            <div className="mt-6">
              <h3 className="font-bold mb-2">Your Prescriptions:</h3>
              {prescriptions.length > 0 ? (
                <ul className="list-disc pl-5">
                  {prescriptions.map((prescription, index) => (
                    <li key={index}>{prescription}</li>
                  ))}
                </ul>
              ) : (
                <p>No prescriptions added yet.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
