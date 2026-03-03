import CreateCarProfile from "@/components/ui/CreateCarProfile";
import {prisma} from "@/lib/db";

export default async function CreateCarPage(props: {
    searchParams: Promise<{ brandId?: string }>;
}) {
    const searchParams = await props.searchParams;
    const brandId = searchParams.brandId;

    const brands = await prisma.brand.findMany({});
    const models = brandId
        ? await prisma.carModel.findMany({ where: { brandId: brandId } })
        : [];

    return (
        <main>
            <CreateCarProfile
                initialCarBrands={brands}

                initialVin=""
                selectedCarBrand={null}
                selectedCarModel={null}
                selectedCarYear={null}
                selectedMileageType={null}
                selectedFuelType={null}

                initialCarModels={models}
                initialCarYears={[]}
                initialMileageType={[]}
                initialFuelType={[]}

                changeCarBrand
            />

        </main>
    );
}
