import React, { useEffect, useState } from 'react';
import './App.css';
import Records from "./records.json";
import Single_Tkt from './components/Single_Ticket';
import { Record } from './record';
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";



const App: React.FC = () => {

  const [ticketCol1, setTicketCol1] = useState<Record[]>([]);
  const [ticketCol2, setTicketCol2] = useState<Record[]>([]);
  const [ticketCol3, setTicketCol3] = useState<Record[]>([]);
  const [ticketCol4, setTicketCol4] = useState<Record[]>([]);
  const [ticketCol5, setTicketCol5] = useState<Record[]>([]);
  const [ticketCol6, setTicketCol6] = useState<Record[]>([]);
  const [ticketCol7, setTicketCol7] = useState<Record[]>([]);
  const [ticketCol8, setTicketCol8] = useState<Record[]>([]);
  const [ticketCol9, setTicketCol9] = useState<Record[]>([]);
  const [ticketCol10, setTicketCol10] = useState<Record[]>([]);

  useEffect(() => {
    if (Records) {
      setTicketCol1(Records.slice(0, 6));
      setTicketCol2(Records.slice(6, 11));
      setTicketCol3(Records.slice(11, 15));
      setTicketCol4(Records.slice(15, 20));
      setTicketCol5(Records.slice(20, 27));
      setTicketCol6(Records.slice(27, 39));
      setTicketCol7(Records.slice(39, 46));
      setTicketCol8(Records.slice(46, 52));
      setTicketCol9(Records.slice(52, 60));
      setTicketCol10(Records.slice(60, 72));
    }
  }, []);


  const onDragEnd = (result: DropResult) => {
    console.log('##### reult #### =>', result);
    const { source, destination } = result;

    if (!destination) return;
    else if ((destination.droppableId === source.droppableId) && (destination.index === source.index)) return;
    else {
      let add: Record | any,
        initialPoint: Record[] | any,
        finalPoint: Record[] | any,
        col1 = ticketCol1,
        col2 = ticketCol2,
        col3 = ticketCol3,
        col4 = ticketCol4,
        col5 = ticketCol5,
        col6 = ticketCol6,
        col7 = ticketCol7,
        col8 = ticketCol8,
        col9 = ticketCol9,
        col10 = ticketCol10;

      const idArr = [
        {
          id: 'ticketColumn1',
          data: col1
        },
        {
          id: 'ticketColumn2',
          data: col2
        },
        {
          id: 'ticketColumn3',
          data: col3
        },
        {
          id: 'ticketColumn4',
          data: col4
        },
        {
          id: 'ticketColumn5',
          data: col5
        },
        {
          id: 'ticketColumn6',
          data: col6
        },
        {
          id: 'ticketColumn7',
          data: col7
        },
        {
          id: 'ticketColumn8',
          data: col8
        },
        {
          id: 'ticketColumn9',
          data: col9
        },
        {
          id: 'ticketColumn10',
          data: col10
        }
      ];

      idArr.map((item) => {
        if(source.droppableId === item.id) {
          add = item.data[source.index];
          initialPoint = item.data;
          initialPoint.splice(source.index, 1);
        }
      });

      add && idArr.map((item) => {
        if(destination.droppableId === item.id) {
          finalPoint = item.data;
          finalPoint.splice(destination.index, 0, add);
        }
      });

      if(initialPoint) {
        if(source.droppableId === 'ticketColumn1') {
          setTicketCol1(initialPoint);
        } else if(source.droppableId === 'ticketColumn2') {
          setTicketCol2(initialPoint);
        } else if(source.droppableId === 'ticketColumn3') {
          setTicketCol3(initialPoint);
        } else if(source.droppableId === 'ticketColumn4') {
          setTicketCol4(initialPoint);
        } else if(source.droppableId === 'ticketColumn5') {
          setTicketCol5(initialPoint);
        } else if(source.droppableId === 'ticketColumn6') {
          setTicketCol6(initialPoint);
        } else if(source.droppableId === 'ticketColumn7') {
          setTicketCol7(initialPoint);
        } else if(source.droppableId === 'ticketColumn8') {
          setTicketCol8(initialPoint);
        } else if(source.droppableId === 'ticketColumn9') {
          setTicketCol9(initialPoint);
        } else if(source.droppableId === 'ticketColumn10') {
          setTicketCol10(initialPoint);
        }
      }

      if(finalPoint) {
        if(destination.droppableId === 'ticketColumn1') {
          setTicketCol1(finalPoint);
        } else if(destination.droppableId === 'ticketColumn2') {
          setTicketCol2(finalPoint);
        } else if(destination.droppableId === 'ticketColumn3') {
          setTicketCol3(finalPoint);
        } else if(destination.droppableId === 'ticketColumn4') {
          setTicketCol4(finalPoint);
        } else if(destination.droppableId === 'ticketColumn5') {
          setTicketCol5(finalPoint);
        } else if(destination.droppableId === 'ticketColumn6') {
          setTicketCol6(finalPoint);
        } else if(destination.droppableId === 'ticketColumn7') {
          setTicketCol7(finalPoint);
        } else if(destination.droppableId === 'ticketColumn8') {
          setTicketCol8(finalPoint);
        } else if(destination.droppableId === 'ticketColumn9') {
          setTicketCol9(finalPoint);
        } else if(destination.droppableId === 'ticketColumn10') {
          setTicketCol10(finalPoint);
        }
      }

    }
  }

  let r:number;
  const x = () => {
    for(var i=1; i<=5; i++) {
       setTimeout(()=>{
 console.log(i);
 console.log('')
       }, i * 1000);
  console.log('Hello World');
    }
    return 1;
 }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className='ticket_section'>

          {r = x()}

          <Droppable droppableId='ticketColumn1'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Refined Granite Sausages</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol1 && ticketCol1.map((record: Record, index: number) => {
                      return <Single_Tkt key={record?.id} record={record} index={index} />
                     
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn2'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Practical Plastic Keyboard</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol2 && ticketCol2.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn3'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Generic Plastic Mouse</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol3 && ticketCol3.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn4'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Handcrafted Cotton Mouse</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol4 && ticketCol4.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }

          </Droppable>

          <Droppable droppableId='ticketColumn5'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Licensed Steel Car</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol5 && ticketCol5.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn6'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Small Plastic Fish</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol6 && ticketCol6.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn7'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Handcrafted Granite Chips</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol7 && ticketCol7.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn8'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Unbranded Cotton Ball</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol8 && ticketCol8.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn9'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Small Wooden Sausages</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol9 && ticketCol9.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId='ticketColumn10'>
            {
              (provided) => (
                <div className='ticket_column'
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <header>
                    <p className='columnTitle'>Handcrafted Steel Chair</p>
                  </header>
                  <div className='columnTickets'>
                    {ticketCol10 && ticketCol10.map((record: Record, index: number) => {
                      return <div key={record?.id}>
                        <Single_Tkt record={record} index={index} />
                      </div>
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )
            }
          </Droppable>

        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
