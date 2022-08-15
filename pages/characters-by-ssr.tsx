import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { theOneApi, tokenTheOneApi } from '../services/the-one-api'

type Character = {
  _id: string
  height: string
  race: string
  gender: string
  birth: string
  spouse: string
  death: string
  realm: string
  hair: string
  name: string
  wikiUrl: string
}

const CharactersBySSR = ({
  characters,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <ul>
        {characters.length &&
          characters.map((character: Character) => (
            <li key={character._id}> {character.name}</li>
          ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${theOneApi}character?page=1&limit=10`, {
    headers: new Headers({
      Authorization: tokenTheOneApi,
    }),
  })
  const result = await res.json()

  // Pass data to the page via props
  return { props: { characters: result.docs } }
}

export default CharactersBySSR
