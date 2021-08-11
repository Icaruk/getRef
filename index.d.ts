declare function _exports(objTarget: any): {
    /**
     * @param {Path} path
    */
    get: (path: Path) => any;
    /**
     * @param {Path} path
     * @param {*} value Value to set.
    */
    set: (path: Path, value: any) => void;
    /**
     * @param {Path} path
    */
    delete: (path: Path) => any;
    /**
     * @param {Path} path
    */
    has: (path: Path) => boolean;
    /**
     * @param {Path} path
     * @param {string} type Type of data (from typeof)
    */
    isType: (path: Path, type: string) => boolean;
};
export = _exports;
/**
 * Dot path `"prop1.prop2"` or array path `["prop1", "prop2"]`
 */
export type Path = Array<string> | string;
