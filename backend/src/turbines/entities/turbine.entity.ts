import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import type { Point } from "geojson";
import { Simulation } from "../../simulation/entities/simulation.entity.js";
import { TurbineCatalog } from "../../turbine-catalog/entities/turbine-catalog.entity.js";


@Entity("turbine")
export class Turbine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "jsonb" })
    coordinates: Point;

    @Column({ type: "int", nullable: false })
    turbine_catalog_id: number;

    @Column({ type: "int" , nullable: true})
    simulation_id: number | null;

    @ManyToOne(() => Simulation, (simulation) => simulation.turbines, {nullable:true})
    @JoinColumn({ name: "simulation_id" })
    simulation: Simulation | null;

    @ManyToOne(() => TurbineCatalog, (turbineCatalog) => turbineCatalog.turbines, {nullable:false})
    @JoinColumn({ name: "turbine_catalog_id" })
    turbineCatalog: TurbineCatalog;
}
