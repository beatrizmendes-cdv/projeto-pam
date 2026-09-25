import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Turbine } from "../../turbines/entities/turbine.entity.js";

@Entity("turbine_catalog")
export class TurbineCatalog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "float" })
    nominal_power: number;

    @Column({ type: "float" })
    rotor_diameter: number;

    @Column({ type: "varchar", length: 255 })
    manufacturer: string;

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    @OneToMany(() => Turbine, (turbine) => turbine.turbineCatalog)
    turbines: Turbine[];
}
