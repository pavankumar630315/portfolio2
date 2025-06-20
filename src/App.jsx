import React from 'react';

export default function App() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Pavan Kumar Gorla</h1>
        <p className="mt-2 text-lg">Software Engineer | Cybersecurity & DevOps Enthusiast</p>
        <p className="mt-4">
          Results-driven software engineer with 3+ years of experience in Cybersecurity, DevOps, and Software Development.
          Skilled in secure, automated cloud solutions with AWS, Terraform, Jenkins, Docker, and strong coding in Python, Java, Golang.
          Graduated with a Master's in Cybersecurity from University of Central Missouri.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>AWS Certified Solutions Architect – Associate (April 2025)</li>
          <li>CompTIA Security+ (Oct 2024)</li>
          <li>CompTIA IT Fundamentals+ (Sep 2024)</li>
          <li>AWS Academy Cloud Security Foundations</li>
          <li>PCAP: Programming Essentials in Python (Python Institute)</li>
          <li>Cybersecurity Essentials (Cisco)</li>
          <li>TryHackMe Pre-Security Certificate</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:gorlapavan12345@gmail.com" className="text-blue-600">gorlapavan12345@gmail.com</a></p>
        <p>Phone: +1 (913) 413-5011</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/gorlapavan" target="_blank" className="text-blue-600">linkedin.com/in/gorlapavan</a></p>
      </section>
    </div>
  );
}
