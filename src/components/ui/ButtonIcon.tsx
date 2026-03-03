"use client";

import { useTranslation } from "react-i18next";
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/navigation";

function ButtonIcon() {
    const { t } = useTranslation();
    const router = useRouter();

    const handleBack = () => {
        router.push("/");
    };

    return (
        <button
            onClick={handleBack}
            className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:text-blue-600 active:scale-95"
        >
            <MdKeyboardBackspace className="h-5 w-5 transition-transform group-hover:-translate-x-1" />

            <span>{t("back") || "Назад"}</span>
        </button>
    );
}

export default ButtonIcon;
