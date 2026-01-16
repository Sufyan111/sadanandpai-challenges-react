import React, { useEffect, useState } from "react";
const url =
  "https://emoji-api.com/emojis?access_key=b72b16d35c95e400ab5b3348e156f8d518030bea";

const EmojiPicker = () => {
  const [emo, setEmo] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchEmojis() {
      const res = await fetch(url);
      const data = await res.json();
      setEmo(data);
      let categoriesData = [...new Set(data.map((d) => d.group))];
      setCategories(categoriesData);
    }
    fetchEmojis();
  }, []);

  let filtered = emo.filter((e) => {
    let text = e.codePoint + e.group + e.slug + e.subGroup + e.unicodeName;
    return text.includes(search.trim());
  });
  if (filter !== "") {
    filtered = filtered.filter((e) => e.group === filter);
  }
  return (
    <div>
      EmojiPicker
      <div>
        <label htmlFor="">
          Search
          <input
            type="text"
            className="p-2 bg-amber-50 border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <select
          name=""
          id=""
          className="mx-4"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option id={c}> {c} </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-8 gap-1.5 h-50 overflow-auto mt-5 p-4 justify-items-center">
        {filtered.map((e) => (
          <div
            key={e.codePoint}
            className="cursor-pointer bg-indigo-800 rounded-full h-8 w-8 p-1 text-center"
          >
            {e.character}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;
