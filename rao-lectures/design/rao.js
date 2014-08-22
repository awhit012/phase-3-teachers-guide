SearchBar.Controller = function() {
  this.fetchNewData = function() {
    var searchResults = this.server.getData()
    $(document).trigger('newData',[searchResults])
  }
}


Map.Controller = function() {
  this.bindListeners = function() {
    $(document).on('newData', this.updateMap )
  }
}

River.Controller = function() {
  this.bindListeners = function() {
    $(document).on('newData', this.updateRiver )
  }

  this.updateRiver = function(searchResults) {}
}

Page Load = searcBar RiverController