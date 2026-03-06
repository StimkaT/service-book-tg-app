"use client";

import Header from "@/components/ui/Header";
import ButtonIcon from "@/components/ui/ButtonIcon";

function MainPageUi() {

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header leftContent={<ButtonIcon/>}/>

                <div className="flex-1">

                    <div className="grid grid-cols-6 auto-rows-fr gap-2 p-2 flex-1">
                        <div className="col-span-6 row-span-2 bg-yellow-500 text-white p-4 rounded shadow">
                            2 строки / 6 столбцов (Основная инфо)
                        </div>

                        <div className="col-span-6 row-span-1 bg-gray-500 text-white p-4 rounded shadow">
                            1 строки / 6 столбцов
                        </div>

                        <div className="col-span-6 row-span-1 bg-gray-500 text-white p-4 rounded shadow">
                            1 строки / 6 столбцов
                        </div>

                        <div className="col-span-3 row-span-3 bg-blue-500 text-white p-4 rounded shadow">
                            3 строки / 3 столбцов
                        </div>
                        <div className="col-span-3 row-span-3 bg-blue-500 text-white p-4 rounded shadow">
                            3 строки / 3 столбцов
                        </div>

                        <div className="col-span-6 row-span-1 bg-gray-500 text-white p-4 rounded shadow">
                            1 строки / 6 столбцов
                        </div>

                        <div className="col-span-2 row-span-3 bg-blue-500 text-white p-4 rounded shadow">
                            3 строки / 2 столбцов
                        </div>
                        <div className="col-span-2 row-span-3 bg-blue-500 text-white p-4 rounded shadow">
                            3 строки / 2 столбцов
                        </div>
                        <div className="col-span-2 row-span-3 bg-blue-500 text-white p-4 rounded shadow">
                            3 строки / 2 столбцов
                        </div>

                        <div className="col-span-6 row-span-5 bg-green-500 text-white p-4 rounded shadow">
                            6 строки / 6 столбцов
                        </div>

                    </div>
                </div>
            </div>


            {/*<div>Переход к профилю</div>*/}
            {/*<div>Добавление/зменение пробега</div>*/}
            {/*<div>Техосмотр/Страховака</div>*/}
            {/*<div>Блок расходов в одну строку</div>*/}
            {/*<div>Блок расходов по топливу в одну строку</div>*/}
            {/*<div>состояния фильтров и пр</div>*/}
            {/*<div>Лист последних расходов - пока не обязательно</div>*/}
        </>
    )
}

export default MainPageUi


