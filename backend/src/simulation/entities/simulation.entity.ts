import { Column, Entity, ForeignKey, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Turbine } from "../../turbines/entities/turbine.entity.js";

@Entity("simulation")
export class Simulation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 255 })
    name: string;

    @OneToMany(() => Turbine, (turbine) => turbine.simulation)
    turbines: Turbine[];


}
