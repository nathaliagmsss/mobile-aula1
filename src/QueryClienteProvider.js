// Importa os componentes do Tanstack Query
import { QueryClient, QueryClientProvider as TanstackProvider } from "@tanstack/react-query";

// Cria uma instância do QueryClient (controla o refect, isLoading etc)
const queryClient = new QueryClient();

// Um componente que vai envolver a nossa aplicação
// Com isso, irá permitir que qualquer componente filho acesse o TanQuery

export default function QueryClientProvider({children}){
    return(
        <TanstackProvider client={queryClient}>
            {children}
        </TanstackProvider>
    )
}