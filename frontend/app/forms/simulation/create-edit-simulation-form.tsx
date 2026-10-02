import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SimulationFormInput, SimulationFormValues, simulationSchema } from "./schema";


interface CreateEditSimulationFormProps {
    initialValues?: Partial<SimulationFormInput>;
    onSubmit: (values: SimulationFormValues) => Promise<void> | void;
    isLoading: boolean;
}

export default function CreateEditSimulationForm({ initialValues, onSubmit, isLoading }: CreateEditSimulationFormProps) {
    const { control, handleSubmit, formState: { errors } } = useForm<SimulationFormInput, any, SimulationFormValues>({
        resolver: zodResolver(simulationSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            description: initialValues?.description ?? "",
            turbineId: initialValues?.turbineId ?? (undefined as any),
        },
    });
}