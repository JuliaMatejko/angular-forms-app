import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NameEditorComponent } from "./name-editor/name-editor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms-app';
}
