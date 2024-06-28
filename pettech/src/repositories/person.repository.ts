import { Person } from '@/entities/person.entity'

export class PersonRepository {
  async findById(id: number): Promise<Person> {
    return {
      id,
      cpf: '26181329048',
      name: 'Joel Ellie',
      birth: new Date('1990-01-01'),
      email: 'joel@gmail.com',
      user_id: 1,
    }
  }

  async create(person: Person): Promise<Person> {
    return person
  }
}
