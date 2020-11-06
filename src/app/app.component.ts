import {Component, EventEmitter, Output} from '@angular/core';
import PinchZoom from "pinch-zoom-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output()
  imageOnDoubleTap = new EventEmitter<unknown>();
  constructor() {
    const containerElement: HTMLElement = document.getElementById('zoom-container');
    new PinchZoom(containerElement, {
      maxZoom: 4,
      minZoom: 1,
      onDragUpdate: (target) => AppComponent.pinchZoomEventHandler(target, this),
      onZoomUpdate: (target) => AppComponent.pinchZoomEventHandler(target, this),
      onDoubleTap: (target) => {
        AppComponent.pinchZoomEventHandler(target, this);
        this.imageOnDoubleTap.emit();
      },
    });

  }

  public static pinchZoomEventHandler(t, _) {
    console.log('pinchZoomEventHandler')
  }
}
