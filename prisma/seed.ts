import { PrismaClient } from './../node_modules/@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
    // 1. Читаем файл (укажи правильное имя файла)
    const filePath = path.join(__dirname, '../cars-data.json')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = JSON.parse(fileContent)

    console.log(`Начинаю импорт ${data.length} брендов...`)

    // 2. Проходим циклом по брендам
    for (const brand of data) {
        await prisma.brand.upsert({
            where: { id: brand.id },
            update: {}, // Если бренд есть, ничего не меняем
            create: {
                id: brand.id,
                name: brand.name,
                cyrillicName: brand.cyrillic_name,
                numericId: brand.numeric_id,
                yearFrom: brand.year_from,
                yearTo: brand.year_to,
                popular: brand.popular,
                country: brand.country,
                // Магия Prisma: создаем бренд и сразу все его вложенные модели
                models: {
                    create: brand.models.map((m: any) => ({
                        id: m.id,
                        name: m.name,
                        cyrillicName: m.cyrillic_name,
                        yearFrom: m.year_from,
                        yearTo: m.year_to,
                        class: m.class,
                    }))
                }
            },
        })
    }

    console.log('Импорт успешно завершен!')
}

main()
    .catch((e) => {
        console.error('Ошибка при импорте:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
