import React from 'react';
import { Network, Lock, Cloud } from 'lucide-react';

const Architecture = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Architecture Expertise</h2>
        
        {/* Architecture Diagram */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Layer */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Client Layer</h3>
              <div className="space-y-3 text-center">
                <div className="bg-white p-3 rounded shadow-sm">Web Applications</div>
                <div className="bg-white p-3 rounded shadow-sm">Mobile Apps</div>
                <div className="bg-white p-3 rounded shadow-sm">Third-party Clients</div>
              </div>
            </div>

            {/* API Layer */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">API Layer</h3>
              <div className="space-y-3 text-center">
                <div className="bg-white p-3 rounded shadow-sm">REST APIs</div>
                <div className="bg-white p-3 rounded shadow-sm">GraphQL</div>
                <div className="bg-white p-3 rounded shadow-sm">gRPC Services</div>
              </div>
            </div>

            {/* Backend Layer */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Service Layer</h3>
              <div className="space-y-3 text-center">
                <div className="bg-white p-3 rounded shadow-sm">Microservices</div>
                <div className="bg-white p-3 rounded shadow-sm">Domain Services</div>
                <div className="bg-white p-3 rounded shadow-sm">Background Jobs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Network className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-gray-600">
              Design and implement highly scalable distributed systems using microservices architecture and containerization
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Lock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Design</h3>
            <p className="text-gray-600">
              Implement robust security measures including OAuth 2.0, JWT authentication, and data encryption
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Cloud className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
            <p className="text-gray-600">
              Expertise in cloud-native development using Azure services and containerization with Docker and Kubernetes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;