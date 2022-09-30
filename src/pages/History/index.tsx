import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lavar loiuça</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Lavar loiuça</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statuscolor="yellow">Em adamento</Status>
              </td>
            </tr>
            <tr>
              <td>Lavar loiuça</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statuscolor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Lavar loiuça</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Lavar loiuça</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
