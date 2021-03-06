/**
 * Created by joel on 6/23/2015.
 */
var assert = require('assert');
var configurator = require('../../app/js/configurator');
var config = require('./data/ts-config');
configurator.setStorage({});
configurator.loadConfig(config);

describe('@Configurator', function() {
    describe('@GetStringValue', function() {
        it('should retrieve a string value', function() {
            var key = 'string',
                expected = 'test string';
            assert.equal(configurator.getString(key), expected);
        })
    });

    describe('@GetIntValue', function() {
        it('should retrieve an int value', function() {
            var key = 'int',
                expected = 111;
            assert.equal(configurator.getString(key), expected);
        })
    });

    describe('@GetBoolValue', function() {
        it('should retrieve a boolean value', function() {
            var key = 'bool',
                expected = true;
            assert.equal(configurator.getBool(key), expected);
        })
    });

    describe('@SetStringValue', function() {
        it('should set a string value', function() {
            var key = 'string',
                expected = 'test this';
            configurator.setValue(key, expected);
            assert.equal(configurator.getString(key), expected);
        })
    });

    describe('@SetIntValue', function() {
        it('should set an int value', function() {
            var key = 'int',
                expected = 222;
            configurator.setValue(key, expected);
            assert.equal(configurator.getString(key), expected);
        })
    });

    describe('@SetBoolValue', function() {
        it('should set a boolean value', function() {
            var key = 'bool',
                expected = false;
            configurator.setValue(key, expected);
            assert.equal(configurator.getBool(key), expected);
        })
    });

    describe('@UnsetValue', function() {
        it('should unset a value', function() {
            var key = 'new setting',
                initial = 'test this',
                expected = '';
            configurator.setValue(key, initial);
            configurator.unsetValue(key);
            assert.equal(configurator.getString(key), expected);
        })
    });

    describe('@CantSetReadOnlyValue', function() {
        it('should be unable to modify a readonly value', function() {
            var key = 'readonly',
                newValue = 'something else'
                expected = 'I am immutable';
            configurator.setValue(key, newValue);
            assert.equal(configurator.getString(key), expected);
        })
    });

    describe('@PurgeValues', function() {
        it('should purge all user-set values', function() {
            configurator.setValue('willpurge', 'user set');
            configurator.setValue('new setting', 'test this');
            configurator.purgeValues();
            assert.equal(configurator.getString('willpurge'), 'this is the default');
            assert.equal(configurator.getString('new setting'), '');
        })
    });
})
