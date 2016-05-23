/*************************************************************************
 * An implementation of range
 *************************************************************************/

batavia.types.Range = function() {
    function Range(start, stop, step) {
        this.start = start;
        this.stop = stop;
        this.step = step || 1;

        if (this.stop === undefined) {
            this.start = 0;
            this.stop = start;
        }
    }

    Range.prototype.toString = function() {
        return this.__str__();
    };

    Range.prototype.__str__ = function() {
        if (this.step) {
            return '(' + this.start + ', ' + this.stop + ', ' + this.step + ')';
        } else {
            return '(' + this.start + ', ' + this.stop + ')';
        }
    };

    Range.prototype.__iter__ = function() {
        return new Range.prototype.RangeIterator(this);
    };

    Range.prototype.constructor = Range;

    /**************************************************
     * Range Iterator
     **************************************************/

    Range.prototype.RangeIterator = function (data) {
        Object.call(this);
        this.data = data;
        this.index = this.data.start;
    };

    Range.prototype.RangeIterator.prototype = Object.create(Object.prototype);

    Range.prototype.RangeIterator.prototype.__next__ = function() {
        var retval = this.index;
        if (this.index < this.data.stop) {
            this.index = this.index + this.data.step;
            return retval;
        }
        throw new batavia.builtins.StopIteration();
    };

    Range.prototype.RangeIterator.prototype.__str__ = function() {
        return "<range_iterator object at 0x99999999>";
    };

    /**************************************************/

    return Range;
}();