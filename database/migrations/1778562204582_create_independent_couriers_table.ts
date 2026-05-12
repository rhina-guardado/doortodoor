import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'independent_couriers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('full_name').notNullable()
      table.string('country_origin').notNullable()
      table.string('country_destination').notNullable()
      table.decimal('price_per_pound', 8, 2).notNullable()
      table.text('description').nullable()
      table.string('whatsapp').nullable()
      table.boolean('is suscribed').defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}