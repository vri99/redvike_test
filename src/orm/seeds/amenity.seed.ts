import {Seeder} from 'typeorm-extension';
import {DataSource} from 'typeorm';
import {AmenityEntity} from "../../entities/amenity.entity";

export default class AmenitySeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(AmenityEntity);
        await repository.insert([
            {
                id: 1,
                name: "Mitel Networks Corporation"
            },
            {
                id: 2,
                name: "Navios Maritime Partners LP"
            },
            {
                id: 3,
                name: "Coherent, Inc."
            },
            {
                id: 4,
                name: "AmTrust Financial Services, Inc."
            },
        ]);
    }
}