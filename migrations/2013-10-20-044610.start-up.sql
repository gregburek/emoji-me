create table "emoji"  (
  id          serial primary key
  , emoji        text
  , created_at  timestamptz default now()
  , data        json
);

create table "emojiparts" (
  id          serial primary key
  , emoji        text
  , created_at  timestamptz default now()
  , data        json
);
