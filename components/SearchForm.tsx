import React from 'react'
import Form from 'next/form'
import SearchFormReset from "@/components/SearchFormReset";
import {Search} from "lucide-react";

const SearchForm = ({query} : {query? : string }) => {


    return (
        <Form action="/pitch/public" scroll={false} className="search-form">
            <input name="query"
            defaultValue={query}
            className="search-input"
            placeholder='Search StartUps'
            />
            <div className='flex gap-2'>
                {
                    query &&
                        <SearchFormReset/>

                }
                <button type="submit" className='search-btn text-white bg-blue-500 hover:bg-blue-600'>
                    <Search className="size-5"/>
                </button>

            </div>

        </Form>
    )
}
export default SearchForm