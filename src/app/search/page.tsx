'use client';
import { SearchHistoryItem } from '@/app/search/components';
import { SearchHistory } from '@/types/search';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchHistoryList, setSearchHistoryList] = useState<SearchHistory[]>([
    { id: 1, keyword: '스타벅스 한국 프레스점', date: '05.20' },
    { id: 2, keyword: '스타벅스 환구단점', date: '05.20' },
  ]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  const handleHistoryDelete = (id: number) => {
    setSearchHistoryList((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <div className="h-screen bg-white">
      <div className="flex h-14 items-center px-6">
        <Link href="/">
          <Image src="/assets/icons/28/Back.svg" width={28} height={28} alt="back" />
        </Link>
        <input
          type="text"
          className="ml-3 w-full text-button1 outline-none placeholder:text-body1 placeholder:text-bk40"
          placeholder="어느 지역의 카페를 보여드릴까요?"
          value={keyword}
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      {searchHistoryList.length === 0 ? (
        <div className="flex h-[calc(100%-3.5rem)] items-center justify-center">
          <p className="text-body1 text-bk40"> 원하는 지역의 카페를 검색해보세요!</p>
        </div>
      ) : (
        <>
          <div className="px-6 py-2.5 text-sub2 text-bk40">최근 검색</div>
          <ul>
            {searchHistoryList.map((searchHistory) => (
              <SearchHistoryItem
                key={searchHistory.id}
                searchHistory={searchHistory}
                handleHistoryDelete={handleHistoryDelete}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
