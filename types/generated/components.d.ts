import type { Schema, Attribute } from '@strapi/strapi';

export interface ServicesSectionService extends Schema.Component {
  collectionName: 'components_services_section_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    ServiceSectionTitle: Attribute.String & Attribute.Required;
    ServiceSectionDescription: Attribute.Text;
    Service: Attribute.Component<'service.service', true>;
  };
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Image: Attribute.Media<'images'>;
  };
}

export interface PartnerSectionLayout extends Schema.Component {
  collectionName: 'components_partner_section_layouts';
  info: {
    displayName: 'Layout';
    icon: 'crop';
    description: '';
  };
  attributes: {
    PartnerSectionTitle: Attribute.String & Attribute.Required;
    PartnerSectionDescription: Attribute.Text;
    Partner: Attribute.Component<'partner.partner', true> & Attribute.Required;
  };
}

export interface PartnerPartner extends Schema.Component {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'services-section.service': ServicesSectionService;
      'service.service': ServiceService;
      'partner-section.layout': PartnerSectionLayout;
      'partner.partner': PartnerPartner;
    }
  }
}
