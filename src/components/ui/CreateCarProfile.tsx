"use client";
import {useTranslation} from "react-i18next";

function CreateCarProfile() {
    const { t } = useTranslation();

    return (
        <>
            <div>шапка</div>
            <div>поле ввода вин номера</div>
            <div>селектор - марка</div>
            <div>селектор - модель(появляется после выбора марки)</div>
            <div>селектор - год</div>
            <div>пробег + тогл км/мили/моточасы</div>
            <div>селектор - тип топлива</div>
            <div>кнопка ДОБАВИТЬ внизу с отступом статическим активирующаяся только при заполнении обяз полей (марка и модель и топливо)</div>
        </>
    )
}

export default CreateCarProfile


