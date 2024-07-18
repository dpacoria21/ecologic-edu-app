import CardUser from '@/components/card-user/CardUser';
import { suggestions } from '@/db/db';

export default function Suggestionspage() {
    return (
        <div className="grid border mx-5 mt-5 border-gray-100 shadow-sm rounded-sm dark:border-gray-700 md:grid-cols-2 bg-white dark:bg-gray-800">
            {suggestions.map((suggestion, i) => (
                <CardUser key={suggestion.id} author={suggestion.author} title={suggestion.title} description={suggestion.description} url={suggestion.url}/>
            ))}
        </div>
    );
}
