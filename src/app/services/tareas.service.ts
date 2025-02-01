import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // localstorage
  // 1. Crear un método para guardar la lista de tareas en el localstorage
  private localStorageKey = 'listaTareas'
  private localStorageKey1 = 'listaTareas2'



  getTareas():string[] {
    // 2. Crear un método para obtener la lista de tareas del localstorage
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
  }


  agregarTarea(tarea:string){
    // 3. Crear un método para agregar una tarea a la lista de tareas
    const tareas = this.getTareas()
    tareas.push(tarea)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

  eliminarTarea(index:number){
    // 4. Crear un método para eliminar una tarea de la lista de tareas
    const tareas = this.getTareas()
    tareas.splice(index, 1)
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

}
