'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const  {v4} = require('uuid')
const { YooCheckout } = require("@a2seven/yoo-checkout");

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async create(ctx) {

    const checkout = new YooCheckout({
      shopId: '210032',
      secretKey: 'test_Olq_eyCh2y6zQFZtPKVTp2LYKUkb_VoIVSFgs-SIpE0'
    });

    const idempotenceKey = '02347fc4-a1f0-49db-7223-f0d67c2ed5a5';
    const {price} = ctx.request.body.data

    const createPayload = {
      amount: {
        value: price,
        currency: 'RUB'
      },
      payment_method_data: {
        type: 'bank_card'
      },
      confirmation: {
        type: 'redirect',
        return_url: 'test'
      }
    };

    try {
      const payment = await checkout.createPayment(createPayload, idempotenceKey);
      console.log('payment', payment)
    } catch (error) {
      console.error('error', error);
    }

    const response = await super.create(ctx);
    console.log('ctx 666', ctx.request.body);
    return response;
  },
}));
