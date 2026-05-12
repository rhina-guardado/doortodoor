import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE')
      table.decimal('amount', 10, 2).notNullable()
      table.decimal('comision', 10, 2).notNullable()
      table.enum('status', ['pending', 'released', 'refunded']).defaultTo('held')
      table.timestamp('released_at').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}