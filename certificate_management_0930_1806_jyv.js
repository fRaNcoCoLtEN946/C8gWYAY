// 代码生成时间: 2025-09-30 18:06:51
const _ = require('lodash');

// Define a Certificate class
class Certificate {
  constructor(id, name, expiryDate) {
    this.id = id;
    this.name = name;
    this.expiryDate = expiryDate;
  }

  // Check if the certificate is expired
  isExpired() {
    const today = new Date();
    return new Date(this.expiryDate) < today;
  }
}

// Define a CertificateManager class to manage certificates
class CertificateManager {
  constructor() {
    this.certificates = [];
  }

  // Add a new certificate to the system
  addCertificate(id, name, expiryDate) {
    if (!id || !name || !expiryDate) {
      throw new Error('All fields are required for adding a certificate.');
    }
    const cert = new Certificate(id, name, expiryDate);
    this.certificates.push(cert);
    return cert;
  }

  // Get a certificate by ID
  getCertificateById(id) {
    return _.find(this.certificates, { id: Number(id) });
  }

  // Update a certificate
  updateCertificate(id, newName, newExpiryDate) {
    const cert = this.getCertificateById(id);
    if (!cert) {
      throw new Error('Certificate not found.');
    }
    if (newName) cert.name = newName;
    if (newExpiryDate) cert.expiryDate = newExpiryDate;
    return cert;
  }

  // Remove a certificate by ID
  removeCertificate(id) {
    this.certificates = _.filter(this.certificates, cert => cert.id !== Number(id));
  }

  // List all certificates
  listCertificates() {
    return this.certificates;
  }
}

// Example usage:
const manager = new CertificateManager();
try {
  const cert1 = manager.addCertificate(1, 'Cert1', '2025-01-01');
  console.log('Added:', cert1);

  const certById = manager.getCertificateById(1);
  console.log('Retrieved by ID:', certById);

  const updatedCert = manager.updateCertificate(1, 'Cert1 Updated', '2026-01-01');
  console.log('Updated:', updatedCert);

  manager.removeCertificate(1);
  console.log('List after removal:', manager.listCertificates());
} catch (error) {
  console.error('Error:', error.message);
}