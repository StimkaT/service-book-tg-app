import GaragePage from "@/components/pages/GaragePage";
import { prisma } from "@/lib/db";

export const dynamic = 'force-dynamic';

export default async function Home() {
    const userCarsList = await prisma.car.findMany({
        where: {
            user: {
                telegramId: 321 // Фильтруем через связь с таблицей User
            }
        },
        include: {
            carModel: {
                include: {
                    brand: true
                }
            }
        }
    });

    return (
        <main className="text-gray-700">
            <GaragePage initialCars={JSON.parse(JSON.stringify(userCarsList))} />
        </main>
    );
}
