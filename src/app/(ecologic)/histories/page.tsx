import CardUser from '@/components/card-user/CardUser';
import { histories } from '@/db/db';

export default function HistoriesPage () {
    return (
        <div className="grid border mx-5 mt-5 border-gray-100 shadow-sm rounded-sm dark:border-gray-700 md:grid-cols-2 bg-white dark:bg-gray-800">
            {histories.map((history, i) => (
                <CardUser key={history.id} author={history.author} date_story={new Date(history.date_story)} title={history.title} description={history.description} url={history.url}/>
            ))}
        </div>
    );
}