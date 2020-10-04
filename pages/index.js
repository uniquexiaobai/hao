import Head from 'next/head';
import got from 'got';

export default function Home({ data }) {
  const getCards = (items = []) => {
    const cards = [];
    const map = {};
    items.forEach(([title, name, url]) => {
      if (map[title] == null) {
        map[title] = cards.length;
        cards.push({ title, list: [] });
      }
      cards[map[title]].list.push({ name, url });
    });
    return cards;
  };

  const cards = getCards(data);

  console.log('data', data, cards);

  return (
    <div className='home'>
      <Head>
        <title>Hao</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='header'>Hao</h1>

      <main>
        {cards.map(card => (
          <div key={card.title} className='card'>
            <h3 className='title'>{card.title}</h3>
            <div className='list'>
              {card.list.map(item => (
                <a key={item.name} href={item.url} className='item'>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>

      <style jsx>{`
        .home {
          margin: 0 100px 50px;
        }

        .header {
          font-size: 35px;
          text-align: center;
          color: rebeccapurple;
        }

        .card {
        }

        .title {
          margin-bottom: 5px;
          font-size: 20px;
        }

        .list {
          overflow: hidden;
          list-style-type: none;
        }

        .item {
          float: left;
          width: 300px;
          height: 25px;
          line-height: 25px;
          margin-bottom: 4px;
          margin-right: 10px;
          font-size: 16px;
          text-decoration: none;
          color: rebeccapurple;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Lucida Console', Monaco, monospace;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const url = 'https://api.apispreadsheets.com/data/1734/?dataFormat=matrix';

  try {
    const { data } = await got(url).json();

    return { props: { data } };
  } catch (err) {
    return { props: {} };
  }
}
