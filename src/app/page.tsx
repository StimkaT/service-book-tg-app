// app/page.tsx
import GaragePage from "@/components/pages/GaragePage";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function Home() {
    // Получаем данные на сервере
    const carList = await prisma.carModel.findMany();

    return (
        <div className="text-green-500">
            START
            {/* Передаем данные как обычный массив */}
            <GaragePage initialCars={JSON.parse(JSON.stringify(carList))} />
            FINISH
        </div>
    );
}
