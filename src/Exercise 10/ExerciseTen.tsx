import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';

interface ListItem {
    id: string,
    name: string
}


function ExerciseTen() {

    const [list, setList] = useState<ListItem[]>([
        { id: '1', name: 'drink more water' },
        { id: '2', name: 'eat less sugar' },
        { id: '3', name: 'strenghten right leg' },
    ])

    // função "handleDragEnd" definida;
    // leva um argumento (result) que a biblioteca instalada passa quando a ação de arraste termina
    // "RESULT" contem informações de onde o item veio e aonde está sendo deixado
    // como é typescript, o tipo de result está como "any"
    const handleDragEnd = (result: DropResult) => {

        // DESESTRUTURAÇÃO!!!

        // source é de onde o item veio, caso tenhamos varias listas
        // nos diz o index do item dentro do array inicialmente

        // destination nos diz em que lista ele está sendo adicionado, no caso de várias listas
        // nos diz o index do item do array aonde ele foi deixado
        const { source, destination } = result;

        // se o item arrastado for deixado fora da área de arrasto (a droppable area) ele retorna nulo
        // ele nao deixa o arrasto acontecer pois retorna a função antes de ocorrerem outras mudanças.
        if (!destination) return;

        // constroi um arrray novo e atualizado a partir do que estabelecemos dentro do estado.
        // não mudamos o array original pois ele espera que o array de dentro do estado seja IMUTÁVEL
        const updatedList = Array.from(list);

        // o método "splice" remove os items do array
        // source.index: o index do item sendo arrastado
        // "splice" retorna um novo array com os items removidos
        // como estamos desestruturando "movedItemsList" (os items que estão sendo alterados), conseguimos pegar somente o que estamos mexendo no momento
        // updatedList NÃO CONTÉM mais - nesse momento - o item arrastado
        const [movedListItem] = updatedList.splice(source.index, 1);

        // parecido com o anterior, porém é um novo array com a ordem nova criada quando arrastamos o item escolhido
        // ao atualizarmos "updatedList", o nosso array agora contém a ordem alterada DEPOIS do arraste!!!
        updatedList.splice(destination.index, 0, movedListItem);

        // atualiza a função do estado com o array novo
        //re-renderiza a ordem do array original
        // faz com que as mudanças apareçam na tela!!!
        setList(updatedList);
        
    }


    // RESUMINDO!!!
            // Grab the source and destination indexes.
            // Exit early if the drop is invalid.
            // Copy the current items array.
            // Remove the dragged item from its old position.
            // Insert it into the new position.
            // Update state so the list reflects the new order.




    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 10</h1>
            <p className="text-white text-[14px]">Make a list where you can drag items to reorder them. Update the order dynamically.</p>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='list'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {list.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className='p-2 mt-4 mb-4 bg-gray-200 rounded-[6px]'
                                            style={provided.draggableProps.style}
                                        >
                                            {item.name}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>


    )
}

export default ExerciseTen