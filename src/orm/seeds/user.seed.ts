import {Seeder} from 'typeorm-extension';
import {DataSource} from 'typeorm';
import {UserEntity} from "../../entities/user.entity";

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(UserEntity);
        await repository.insert([
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
            {
                id: 4,
            },
        ]);
    }
}