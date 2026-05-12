import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('agency_id').unsigned().references('id').inTable('agencies').nullable
      table.integer('courier_id').unsigned().references('id').inTable('independent_couriers').nullable
      table.string('package_description').notNullable()
      table.decimal('total_amount', 10, 2).notNullable()
      table.decimal('comision_amount', 10, 2).notNullable()
      table.enum('status', ['pending', 'in_transit', 'delivered', 'cancelled']).defaultTo('pending')
      table.boolean('payment_released').defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}