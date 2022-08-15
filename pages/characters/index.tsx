import { useState } from 'react'
import { Button, Pagination, Textfield } from '../../components'
import { useFetch } from '../../hooks'
import { headersTheOneApi, theOneApi } from '../../services/the-one-api'

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

export default function Characters() {
  const limit = 10
  const [page, setPage] = useState(1)
  const [queryMatch, setQueryMatch] = useState('')
  const [searchCharacter, setSearchCharacter] = useState('')

  const { data, error } = useFetch(
    `${theOneApi}character?page=${page}&limit=${limit}${queryMatch}`,
    headersTheOneApi,
  )

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const characters: Character[] = data.docs
  const totalPages: number = data.pages
  const totalResults: number = data.total
  const currentPage: number = data.page

  return (
    <main>
      <Textfield
        type="search"
        name="search-character"
        value={searchCharacter}
        handleChange={(e) => setSearchCharacter(e.target.value)}
      />
      <Button
        text={'Buscar'}
        type={'button'}
        clickButton={() => setQueryMatch(`&name=${searchCharacter}`)}
      />

      <div className="content">
        <table>
          <thead>
            <tr>
              <th> Nome </th>
              <th> Raça </th>
              <th> Reino </th>
              <th> Gênero </th>
              <th> Nascimento </th>
              <th> Morte </th>
              <th> Conjuge </th>
              <th> Cabelo </th>
              <th> Altura </th>
              <th> Wiki </th>
            </tr>
          </thead>
          <tbody>
            {characters &&
              characters.map((character) => (
                <tr key={character._id}>
                  <td>{character.name}</td>
                  <td>{character.race}</td>
                  <td>{character.realm}</td>
                  <td>{character.gender}</td>
                  <td>{character.birth}</td>
                  <td>{character.death}</td>
                  <td>{character.spouse}</td>
                  <td>{character.hair}</td>
                  <td>{character.height}</td>
                  <td>{character.wikiUrl}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        changePage={setPage}
      />
    </main>
  )
}
