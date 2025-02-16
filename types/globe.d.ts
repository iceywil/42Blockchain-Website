import ThreeGlobe from "three-globe";
import { EventHandlers } from './core/events';

declare module "@react-three/fiber" {
    interface ThreeElements {
        threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
} extend({ ThreeGlobe });

export declare type Object3DNode<T, P> = Overwrite<Node<T, P>, {
    position?: Vector3;
    up?: Vector3;
    scale?: Vector3;
    rotation?: Euler;
    matrix?: Matrix4;
    quaternion?: Quaternion;
    layers?: Layers;
    dispose?: (() => void) | null;
}> & EventHandlers;
