"use client";

import React from "react";

const batteryData = [
  {
    brand: "Perodua / Proton",
    models: [
      { name: "Perodua Kancil", batteries: ["NS40ZL", "34B19L"] },
      { name: "Perodua Viva", batteries: ["NS40ZL", "34B19L"] },
      { name: "Perodua Axia", batteries: ["NS40ZL", "34B19L"] },
      { name: "Perodua Myvi Lama", batteries: ["NS40ZL"] },
      { name: "Perodua Myvi Baru", batteries: ["NS60S", "NS60L"] },
      { name: "Perodua Bezza", batteries: ["NS60S"] },
      { name: "Perodua Alza", batteries: ["NS70"] },
      { name: "Proton Saga BLM/FL", batteries: ["NS60S"] },
      { name: "Proton Saga VVT Baru", batteries: ["NS60S"] },
      { name: "Proton Persona Lama", batteries: ["NS60L"] },
      { name: "Proton Persona Baru", batteries: ["NS60L", "NS70"] },
      { name: "Proton Wira", batteries: ["N50"] },
      { name: "Proton Iswara", batteries: ["N50"] },
      { name: "Proton Exora", batteries: ["NS70", "N70"] },
      { name: "Proton X70", batteries: ["DIN55", "DIN66 AGM"] },
    ],
  },
  {
    brand: "Toyota / Honda",
    models: [
      { name: "Toyota Vios", batteries: ["NS60L"] },
      { name: "Toyota Avanza", batteries: ["NS70"] },
      { name: "Toyota Hilux Vigo", batteries: ["NS70", "N70"] },
      { name: "Honda City Lama", batteries: ["NS60S", "NS60L"] },
      { name: "Honda City Baru (i-DCD)", batteries: ["NS60L", "AGM 60 Ah"] },
      { name: "Honda Civic FD", batteries: ["NS60L"] },
      { name: "Honda Civic Turbo", batteries: ["DIN55 AGM"] },
      { name: "Honda CR-V", batteries: ["DIN66"] },
      { name: "Honda HR-V", batteries: ["DIN55", "DIN66"] },
    ],
  },
  {
    brand: "Nissan / Mitsubishi",
    models: [
      { name: "Nissan Almera", batteries: ["NS60S"] },
      { name: "Nissan Grand Livina", batteries: ["NS70"] },
      { name: "Nissan Navara", batteries: ["N70"] },
      { name: "Mitsubishi Triton", batteries: ["N70", "DIN66"] },
      { name: "Mitsubishi Lancer", batteries: ["DIN55"] },
    ],
  },
  {
    brand: "Continental / SUV",
    models: [
      { name: "BMW 320i F30", batteries: ["DIN55", "DIN66"] },
      { name: "BMW 5 Series", batteries: ["DIN74"] },
      { name: "Mercedes C-Class", batteries: ["DIN66 AGM"] },
      { name: "Mercedes E-Class", batteries: ["DIN74 AGM"] },
      { name: "Mercedes S-Class", batteries: ["DIN88 AGM"] },
      { name: "Volkswagen Polo", batteries: ["DIN44"] },
      { name: "Volkswagen Golf", batteries: ["DIN55 AGM"] },
      { name: "Ford Ranger", batteries: ["NS70", "N70"] },
      { name: "Isuzu D-Max", batteries: ["N70"] },
    ],
  },
];

export default function BatteryListPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-6 md:p-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        📋 Senarai Detail Bateri Kereta (Malaysia)
      </h1>

      {batteryData.map(({ brand, models }) => (
        <section key={brand} className="mb-10">
          <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2 mb-4">
            {brand}
          </h2>
          <ul className="space-y-2">
            {models.map(({ name, batteries }) => (
              <li
                key={name}
                className="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <span className="font-medium text-lg">{name}</span>
                <span className="mt-1 md:mt-0 text-gray-700">
                  {batteries.join(" / ")}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-12 border-t border-gray-300 pt-6 text-gray-600 text-sm">
        <h3 className="font-semibold mb-2">✅ Nota:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Pastikan terminal (Z/ZL) betul.</li>
          <li>Kapasiti Ah &amp; CCA ikut jenama Century, Amaron, Yuasa dll.</li>
          <li>AGM/EFB perlu untuk kereta start-stop.</li>
        </ul>
      </section>
    </main>
  );
}
