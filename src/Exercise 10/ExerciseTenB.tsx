// É O MESMO DO "EXERCISE 10" SÓ QUE COM 2 LISTAS QUE PODEM TROCAR ENTRE SI


import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';

interface ListItem {
    id: string,
    name: string
}


function ExerciseTenB() {

    // STATE LISTS
    const [listA, setListA] = useState<ListItem[]>([
        { id: '1', name: 'Drink more water' },
        { id: '2', name: 'Eat less sugar' },
        { id: '3', name: 'Strengthen right leg' },
    ]);

    const [listB, setListB] = useState<ListItem[]>([
        { id: '4', name: 'Eat healthier' },
        { id: '5', name: 'Study more' },
        { id: '6', name: "Don't complain" },
    ]);

    // FUNCTION "handleDragEnd" RECEIVES "result" FROM THE LIBRARY
    const handleDragEnd = (result: DropResult) => {

        // DESTRUCTURING: source is where the item came from, destination is where it was dropped
        const { source, destination } = result;

        // IF ITEM IS DROPPED OUTSIDE ANY DROPPABLE, EXIT EARLY
        if (!destination) return;

        // DETERMINE SOURCE AND DESTINATION LISTS AND THEIR SETTERS
        const sourceList = source.droppableId === 'list-1' ? listA : listB;
        const destList = destination.droppableId === 'list-1' ? listA : listB;
        const setSourceList = source.droppableId === 'list-1' ? setListA : setListB;
        const setDestList = destination.droppableId === 'list-1' ? setListA : setListB;

        // REORDER WITHIN SAME LIST
        if (source.droppableId === destination.droppableId) {
            const updated = Array.from(sourceList); // create new array (state must be immutable)
            const [moved] = updated.splice(source.index, 1); // remove dragged item
            updated.splice(destination.index, 0, moved); // insert at new position
            setSourceList(updated); // update state -> triggers re-render
        } else {
            // MOVE BETWEEN DIFFERENT LISTS
            const sourceCopy = Array.from(sourceList); // copy source array
            const destCopy = Array.from(destList); // copy destination array
            const [moved] = sourceCopy.splice(source.index, 1); // remove from source
            destCopy.splice(destination.index, 0, moved); // insert into destination
            setSourceList(sourceCopy); // update source state
            setDestList(destCopy); // update destination state
        }

        // RESUMING LOGIC:
        // Grab the source and destination indexes.
        // Exit early if the drop is invalid.
        // Copy the current items array.
        // Remove the dragged item from its old position.
        // Insert it into the new position.
        // Update state so the list reflects the new order.
    };

    // RENDER FUNCTION FOR EACH LIST
    const renderList = (items: ListItem[], droppableId: string) => (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="p-2 bg-gray-100 rounded-md min-h-[120px] min-w-[130px] flex flex-col gap-2"
                >
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="p-2 bg-gray-300 rounded shadow cursor-move"
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
    );

    return (
        <div className="col-span-2 flex flex-row justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4">
            <div className='w-[150px] flex flex-col gap-4'>
                <h1 className="font-semibold text-white">Exercise 10.b and <span className='bg-red-400 pl-1 pr-1'>Exercise 16</span></h1>
                <p className="text-white text-[14px]">Make a list where you can drag items to reorder them. Update the order dynamically.</p>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                {renderList(listA, 'list-1')} {/* First list */}
                {renderList(listB, 'list-2')} {/* Second list */}
            </DragDropContext>
        </div>
    );
}

export default ExerciseTenB